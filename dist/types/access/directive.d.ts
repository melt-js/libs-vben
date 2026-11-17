/**
 * Global authority directive
 * Used for fine-grained control of component permissions
 * @Example v-access:role="[ROLE_NAME]" or v-access:role="ROLE_NAME"
 * @Example v-access:code="[ROLE_CODE]" or v-access:code="ROLE_CODE"
 */
import type { App } from 'vue';
export declare function registerAccessDirective(app: App): void;
