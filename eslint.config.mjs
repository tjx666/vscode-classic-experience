import yutengjingEslintConfigTypescript from '@yutengjing/eslint-config-typescript';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['test-workspace/**/*']),
    yutengjingEslintConfigTypescript,
]);
