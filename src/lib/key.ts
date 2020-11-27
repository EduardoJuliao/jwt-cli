import { generate } from 'generate-password';

export function createKey(): string{
    return generate({
        length: 256,
        numbers: true,
        symbols: false,
        lowercase: true,
        uppercase: true
    });
}