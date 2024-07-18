import { TagsTypes } from "../../../types/Tags";

export function mapTags(tags: any): TagsTypes[] {
    return tags.map((tag: any) => {
        const [latitude, longitude] = tag.lastLatLng.split(',').map(Number);
        return {
            ...tag,
            lastLatLng: { latitude, longitude }
        };
    });
}