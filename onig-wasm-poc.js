const fs = require('fs');
const path = require('path');
const onig = require('vscode-oniguruma');

const wasmPath = path.join(__dirname, 'node_modules/vscode-oniguruma/release/onig.wasm');
const wasmBin = fs.readFileSync(wasmPath).buffer;

onig.loadWASM(wasmBin).then(() => {
    console.log("🚀 MOTOR ATEŞLENDİ: Oniguruma Hazır!");
    console.log("⏱️ STRESS TEST BAŞLADI: 'Exponential Backtracking' Deneniyor...");

    // Katil Regex: Milyarlarca yol denemesi için tasarlandı
    const pattern = "(([a-z])+)+$";
    const text = "aA".repeat(100) + "!";

    try {
        const scanner = new onig.OnigScanner([pattern]);

        console.time(" İşlem Süresi");
        const result = scanner.findNextMatchSync(text, 0);
        console.timeEnd("İşlem Süresi");

        if (result) {
            console.log(" Eşleşme Bulundu (Savunma Zayıf!)");
        } else {
            console.log(" Eşleşme Yok (Motor Başarıyla Bitirdi)" );