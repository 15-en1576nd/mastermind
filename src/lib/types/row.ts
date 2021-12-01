import type Hint from '$lib/enums/hint';
import type { Code } from './code';

interface Row {
	code: Code;
	hints: Hint[];
}

export default Row;
