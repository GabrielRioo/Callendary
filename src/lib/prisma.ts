import { PrismaClient } from '@prisma/client'

// Le o arquivo .env para saber as configurações com banco de dados
export const prisma = new PrismaClient({
  log: ['query'], // cria os comandos de log no proprio terminal
})
