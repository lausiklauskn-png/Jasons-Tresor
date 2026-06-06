// Headless-Beweis fuer das Andock (eigene Identitaet + reziproke Verifikation).
// Echte Krypto: Ed25519/SHA-256 ueber node:crypto, ueber den importierten
// Verifizierer scripts/verify_foreign_spore.mjs (kein Duplikat der Logik).
// Prueft die ausgelieferten Dateien sbkim/spore.json (wir) und
// sbkim/sage_inbox.json (Sages Momentaufnahme) gegen UNSERE kanonische Form.

import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { createHash } from "node:crypto";
import { verifyForeignSpore } from "../scripts/verify_foreign_spore.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const load = (p) => JSON.parse(readFileSync(resolve(ROOT, p), "utf8"));

function base64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function base64urlToBuf(str) {
  const pad = str.length % 4 === 0 ? "" : "====".slice(str.length % 4);
  return Buffer.from(str.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64");
}

test("eigene Spore (sbkim/spore.json) verifiziert ✔ VALID", () => {
  const spore = load("sbkim/spore.json");
  const r = verifyForeignSpore(spore);
  assert.equal(r.valid, true, r.reason);
  assert.equal(r.checks.id, true);
  assert.equal(r.checks.signature, true);
  assert.equal(r.checks.tamperRejected, true);
});

test("eigene id == base64url(SHA256(roher Pubkey))", () => {
  const spore = load("sbkim/spore.json");
  const rawPub = base64urlToBuf(spore.publicKey.x);
  assert.equal(spore.id, base64url(createHash("sha256").update(rawPub).digest()));
});

test("eigene Spore traegt die 9 Pflichtfelder + Tresor-Identitaet", () => {
  const spore = load("sbkim/spore.json");
  for (const f of ["createdAt", "domain", "embeddingModel", "endpoint", "id",
                   "nodeType", "protocolVersion", "publicKey", "signature"]) {
    assert.ok(f in spore, `Pflichtfeld fehlt: ${f}`);
  }
  assert.equal(spore.nodeName, "Jasons-Tresor");
  assert.equal(spore.protocolVersion, "0.1");
  assert.equal(spore.domainVector.length, 384);
});

test("Manipulation an eigener Spore faellt durch", () => {
  const spore = load("sbkim/spore.json");
  const tampered = { ...spore, domain: spore.domain + " TAMPER" };
  assert.equal(verifyForeignSpore(tampered).valid, false);
});

test("reziprok: Sages Spore (sbkim/sage_inbox.json) verifiziert ✔ VALID", () => {
  const spore = load("sbkim/sage_inbox.json");
  const r = verifyForeignSpore(spore);
  assert.equal(r.valid, true, r.reason);
  assert.equal(spore.nodeName, "Sage");
});

test("reziprok: SB-KIMTool-Points Spore (sbkim/point_inbox.json) verifiziert ✔ VALID", () => {
  const spore = load("sbkim/point_inbox.json");
  const r = verifyForeignSpore(spore);
  assert.equal(r.valid, true, r.reason);
  assert.equal(spore.nodeName, "SB-KIMTool-Point");
});

test("reziprok: Mein-Tresors Spore (sbkim/meintresor_inbox.json) verifiziert ✔ VALID", () => {
  const spore = load("sbkim/meintresor_inbox.json");
  const r = verifyForeignSpore(spore);
  assert.equal(r.valid, true, r.reason);
  assert.equal(r.checks.id, true);
  assert.equal(r.checks.signature, true);
  assert.equal(r.checks.tamperRejected, true);
  assert.equal(spore.nodeName, "Mein-Tresor");
  // Erwartete, von Klaus genannte stabile nodeId.
  assert.equal(spore.id, "wRsGQouOYPVBOLzAB3nBteRvyvJ-AGv461WTJMKtkS0");
});

test("verified-match Mein-Tresor: Cosinus = 1.0 (>= 0.80), Vektoren identisch", () => {
  // Mein-Tresor traegt jetzt einen echten domainVector. Cosinus = 1.0, weil der
  // Domaenen-Text byte-gleich zu unserem ist (Schwester-Tresore, gewollt) -> identische
  // Embeddings. Ehrlich: kein "entdeckter" Treffer, sondern Identitaet der Eingaben.
  const us = load("sbkim/spore.json").domainVector;
  const mt = load("sbkim/meintresor_inbox.json").domainVector;
  assert.equal(mt.length, 384);
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm = (a) => Math.sqrt(dot(a, a));
  const cos = dot(us, mt) / (norm(us) * norm(mt));
  assert.ok(Math.abs(cos - 1) < 1e-4, `Cosinus ${cos} != 1.0 (Mein-Tresor meldete 1.0)`);
  assert.ok(cos >= 0.8, "kein verified-match (Cosinus < 0.80)");
});

test("verified-match Sage: Cosinus(eigene Spore, Sage) = 0.847784 (>= 0.80)", () => {
  // Unabhaengige Gegenrechnung zu Sages gemeldetem Modul-04-Score. Beide Vektoren
  // sind L2-normalisiert -> Cosinus == Skalarprodukt.
  const us = load("sbkim/spore.json").domainVector;
  const sage = load("sbkim/sage_inbox.json").domainVector;
  assert.equal(us.length, 384);
  assert.equal(sage.length, 384);
  const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
  const norm = (a) => Math.sqrt(dot(a, a));
  assert.ok(Math.abs(norm(us) - 1) < 1e-3, "eigener Vektor nicht L2-normalisiert");
  const cos = dot(us, sage) / (norm(us) * norm(sage));
  assert.ok(Math.abs(cos - 0.847784) < 1e-4, `Cosinus ${cos} != 0.847784 (Sages Score)`);
  assert.ok(cos >= 0.8, "kein verified-match (Cosinus < 0.80)");
});
