export const getBuilding = (cur) => {
  switch (cur) {
    case ('ATL'): return {
      coordinates: {
        lat: 55.748260,
        lng: 37.540829,
      },
      info: {
        name: 'Empire business high-rise',
        areaCode: '123317',
        area: '287 723 m2',
        elevation: '239 m',
        type: 'Multi-purpose',
      },
    };
    case ('ATLE'): return {
      coordinates: {
        lat: 55.748260,
        lng: 37.540829,
      },
      info: {
        name: 'Empire business high-rise',
        areaCode: '123317',
        area: '287 723 m2',
        elevation: '239 m',
        type: 'Multi-purpose',
      },
    };
    case ('ATLF'): return {
      coordinates: {
        lat: -34.590548,
        lng: -58.3825548,
      },
      info: {
        name: 'Four Seasons Hotel Buenos Aires',
        areaCode: 'C1011ABB',
        area: '1 071 m2',
        elevation: '44 m',
        type: 'Hotel',
      },
    };
    case ('ATLG'): return {
      coordinates: {
        lat: 53.438889,
        lng: -2.966389,
      },
      info: {
        name: 'Goodison Park',
        areaCode: 'L4 4EL',
        area: '13 400 m2',
        elevation: '40 m',
        type: 'Stadium',
      },
    };
  }
};
