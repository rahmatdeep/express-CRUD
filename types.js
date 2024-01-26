const { log } = require("console");
const zod = require("zod");

const createTodo = zod.object({
  title: zod.string().refine((data) => data.trim() !== "", {
    message: "Title is required",
  }),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string().refine((data) => data.trim() !== "", {
    message: "ID is required",
  }),
//   description: zod.string().optional(),
});

module.exports = {
  createTodo,
  updateTodo,
};
