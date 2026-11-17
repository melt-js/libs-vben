export declare class StateHandler {
    private condition;
    private rejectConditions;
    private resolveConditions;
    isConditionTrue(): boolean;
    reset(): void;
    setConditionFalse(): void;
    setConditionTrue(): void;
    waitForCondition(): Promise<void>;
    private clearPromises;
}
