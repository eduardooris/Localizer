import {useEffect, useState} from 'react';
import {useForm} from '../../../hooks/useForm';
import {History, TagsTypes} from '../../../types/Tags';
import {mock} from '../../../mock/tagMock';
import {mapTags} from '../helpers/mapTags';
import {navigation} from '../../../routes';
import filter from 'lodash.filter';
import {useDispatch, useSelector} from 'react-redux';

interface typeForm {
  search: string;
}

interface reduxType {
  mapReducer: {
    seeHistory: boolean;
    historyList: History[];
  };
}

export const useViewModel = () => {
  const [form, setForm] = useForm<typeForm>({search: ''});
  const [tags, setTags] = useState<TagsTypes[]>([]);
  const [tag, setTag] = useState<TagsTypes | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {seeHistory, historyList, state} = useSelector((state: reduxType) => {
    return {
      seeHistory: state.mapReducer.seeHistory,
      historyList: state.mapReducer.historyList,
      state: state,
    };
  });
  console.log(seeHistory, historyList, state);
  const {navigate} = navigation();

  useEffect(() => {
    getTags();
  }, []);

  const getTags = () => {
    setTags(mapTags(mock));
  };

  const getTag = (data: TagsTypes) => {
    setTag(data);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const filterTag = (event: string) => {
    const formattedQuery = event.toLowerCase();
    const filteredData = filter(mock, (tag: TagsTypes) => {
      return tag.name.toLowerCase().includes(formattedQuery);
    });
    setForm({search: event});
    setTags(mapTags(filteredData));
  };

  const calculateInitialRegion = (markers: TagsTypes[]) => {
    if (markers.length === 0) {
      return {
        latitude: -3.7970297,
        longitude: -38.569412,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
    }

    let minLat = markers[0].lastLatLng.latitude;
    let maxLat = markers[0].lastLatLng.latitude;
    let minLng = markers[0].lastLatLng.longitude;
    let maxLng = markers[0].lastLatLng.longitude;

    markers.forEach(marker => {
      const {latitude, longitude} = marker.lastLatLng;
      if (latitude < minLat) minLat = latitude;
      if (latitude > maxLat) maxLat = latitude;
      if (longitude < minLng) minLng = longitude;
      if (longitude > maxLng) maxLng = longitude;
    });

    const latitude = (minLat + maxLat) / 2;
    const longitude = (minLng + maxLng) / 2;

    const latitudeDelta = maxLat - minLat + 0.1;
    const longitudeDelta = maxLng - minLng + 0.1;

    return {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };
  };

  const closeHistory = () => {
    dispatch({
      type: 'SET_HISTORY',
      payload: {seeHistory: false, historyList: []},
    });
  };

  return {
    form,
    setForm,
    tags,
    calculateInitialRegion,
    tag,
    getTag,
    modal,
    closeModal,
    filterTag,
    navigate,
    seeHistory,
    historyList,
    closeHistory
  };
};
