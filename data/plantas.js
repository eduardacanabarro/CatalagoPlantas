/**
 * @swagger
 * tags:
 *   name: Plantas
 *   description: Operações relacionadas às plantas
 */

/**
 * @swagger
 * /plantas:
 *   get:
 *     summary: Retorna todas as plantas
 *     description: Retorna uma lista de todas as plantas cadastradas
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nome:
 *                     type: string
 *                   especie:
 *                     type: string
 *                   localizacao:
 *                     type: string
 *                   descricao:
 *                     type: string
 */

// Adicione outras rotas e anotações Swagger conforme necessário
