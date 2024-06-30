import type { Sample } from '@/interfaces/Sample';

export class SampleAPICaller {
    private static readonly SAMPLE_API_URL: string = 'https://jsonplaceholder.typicode.com/posts';

    public static async getSample(): Promise<Sample[]> {
        const response = await fetch(this.SAMPLE_API_URL);
        const data = await response.json();
        return data;
    }
}
