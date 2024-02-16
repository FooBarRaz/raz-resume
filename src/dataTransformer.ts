import { ResumeSchema } from '@kurone-kito/jsonresume-types';
import { raz } from './raz-resume';
export const transform = (source: typeof raz): ResumeSchema => {
    return source as any;
} 
