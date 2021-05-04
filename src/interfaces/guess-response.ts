export interface IGuessResponse {
    error: null;

    id: number;

    result: {
        bpm: number;

        offset: number;

        peaks: number[];

        tempo: number;
    };
}
