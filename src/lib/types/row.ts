import type Ball from '$lib/enums/ball';
import type { Code } from './code';

interface Row {
	code: Code;
	balls: Ball[];
}

export default Row;
