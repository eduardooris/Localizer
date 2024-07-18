
export interface createTagParams {
    sn: string;
    uid: string;
    name: string;
    mac: string;
}

export interface History {
    createtime: string;
    latitude: number;
    longitude: number;
    sn: string;
    timestamp: string;
    updatetime: string;
}

interface LastLatLng {
    latitude: number;
    longitude: number;
}

export interface TagsTypes {
    bandtime: string;
    cid: string;
    createtime: string;
    del: boolean;
    gettime: string;
    historyList: History[];
    icon: string;
    id: number;
    lastAddress: string;
    lastArea: string;
    lastLatLng: LastLatLng;
    mac: string;
    name: string;
    remarks: string;
    sn: string;
    status: number;
    timeout: string;
    timestamp: string;
    uid: string;
    updatetime: string;
    orderid?: string;
    unbandtime?: string;
}

