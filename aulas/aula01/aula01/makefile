# ========= Configuração básica =========
SHELL := /bin/bash

# Diretórios de origem e saída
SRC_DIR := src
OUT_DIR := dist

# ========= Utilidades =========
# Garante que a pasta dist exista (sem forçar rebuild)
$(OUT_DIR):
	@mkdir -p $(OUT_DIR)

# Regra de padrão: converte src/<nome>.ts -> dist/<nome>.js
# $@  = alvo (dist/<nome>.js)
# $<  = primeira dependência normal (src/<nome>.ts)
# $|  = pré-requisitos apenas de ordem (aqui: dist/)
# $*  = stem (a parte que casou com %)
$(OUT_DIR)/%.js: $(SRC_DIR)/%.ts | $(OUT_DIR)
	@echo "[demo] Alvo ($@)"
	@echo "[demo] Primeira dependência ($<)"
	@echo "[demo] Order-only prereqs ($|)"
	@echo "[demo] Stem ($*)"
	@# Comando real de compilação (descomente se quiser compilar de verdade):
	@ npx tsc --outDir $(OUT_DIR) $<

# ========= Alvos de alto nível =========
.PHONY: help demo create-sample function clean

# Mostra ajuda
help:
	@echo "Comandos disponíveis:"
	@echo "  make help            - Mostra esta ajuda"
	@echo "  make demo            - Demonstra variáveis automáticas em regras de padrão"
	@echo "  make create-sample   - Cria src/function_sample.ts de exemplo"
	@echo "  make function        - Compila e executa src/function.ts -> dist/function.js"
	@echo "  make clean           - Remove a pasta dist/"
	@echo ""
	@echo "Dicas:"
	@echo "  - Use TAB (não espaços) antes de cada comando."
	@echo "  - Se der 'missing separator', verifique TAB e quebras de linha (use LF)."
	@echo "  - Você pode rodar 'make <nome>' para alvos declarados (ex.: function)."

# Demonstração: força a criação de dist/function_sample.js usando a regra de padrão
demo: $(OUT_DIR)/function_sample.js
	@echo "[demo] OK, alvo construído: $^"

# Cria um arquivo de exemplo para você testar
create-sample:
	@mkdir -p $(SRC_DIR)
	@printf "%s\n" "console.log('Está é uma função!');" > $(SRC_DIR)/function_sample.ts
	@echo "Arquivo criado: $(SRC_DIR)/function_sample.ts"

# Exemplo prático: compila e executa dist/function.js
# Observação: para compilar de verdade, descomente o 'npx tsc...' dentro da regra de padrão.
function: $(OUT_DIR)/function.js
	@# Executa o JavaScript de saída (se compilado)
	@node $(OUT_DIR)/function.js || (echo "Dica: descomente o 'npx tsc...' na regra de padrão ou gere o JS manualmente." && exit 1)

# Limpa a saída
clean:
	@rm -rf $(OUT_DIR)
	@echo "Limpo: $(OUT_DIR)/"