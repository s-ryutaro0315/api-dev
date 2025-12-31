import { Router } from 'express';
import { z } from 'zod';

const router = Router();

const ItemSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1)
});

type Item = z.infer<typeof ItemSchema>;

let items: Item[] = [
  { id: 1, name: 'Sample item' }
];

router.get('/', (_req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const parse = ItemSchema.safeParse(req.body);
  if (!parse.success) return res.status(400).json({ error: parse.error.errors });

  const nextId = items.length ? Math.max(...items.map(i => i.id ?? 0)) + 1 : 1;
  const newItem: Item = { id: nextId, ...parse.data };
  items.push(newItem);
  res.status(201).json(newItem);
});

export default router;
