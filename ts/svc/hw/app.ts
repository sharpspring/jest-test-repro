import clc from 'cli-color';

import { greet } from '@lib/greet';

let message: string = greet(clc.yellow('Hello'));

console.log(message);
