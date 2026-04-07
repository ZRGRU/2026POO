# Passo a passo para criar um projeto nodejs

```shell
# Criar a pasta
mkdir minha_pasta

# Ir para a pasta
cd minha_pasta

# Iniciar projeto node
npm init -y

# Instalar arquivos o iniciais
npm i -D typescript ts-node @types/node

# Cria o tsconfig.json
npx tsc --init

# Criar a pasta src e dist
mkdir src dist

# Scripts dentro de package.json
# "scripts":{
#     "build":"tsc",
#     "start":"node dist/index.js",
#     "dev":"ts-node src/index.ts"
# }

# Para rodar um .ts diferente do index.ts
npx ts-node meu_arquivo.ts
```
