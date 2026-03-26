 # vscode-oniguruma-wasm-research 🚀

## 🎯 Purpose
This repository is a technical playground for analyzing the **vscode-oniguruma** (WebAssembly) regex engine used in VS Code. The primary goal is to investigate performance boundaries and potential **ReDoS (Regex Denial of Service)** vulnerabilities through stress testing and fuzzing.

## 🛠️ Research Focus
- **Exponential Backtracking:** Testing complex regex patterns against long strings to observe CPU spikes.
- **WASM Performance:** Evaluating the execution time of the Oniguruma engine in a Node.js environment.
- **Security Boundaries:** Identifying if the engine has built-in protections (e.g., backtracking limits) to prevent editor-wide freezes.

## 🧪 Current Status
- **Initial Setup:** Successfully loaded `onig.wasm`.
- **Stress Test:** Observed 700ms+ execution times for certain nested grouping patterns with ~300 characters.
- **Next Steps:** Investigating Unicode-based ambiguity and memory management limits.

## ⚖️ License
Licensed under the **MIT License**. Created by **Deniz Güney Yıldırım**.
