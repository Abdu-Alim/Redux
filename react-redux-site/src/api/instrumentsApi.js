let instruments = [
    {
        id: 1,
        name: "Гитара",
        type: "Струнный",
        description: "Популярный инструмент с 6 струнами",
        price: 300
    },
    {
        id: 2,
        name: "Пианино",
        type: "Клавишный",
        description: "Классический клавишный инструмент",
        price: 1200
    },
    {
        id: 3,
        name: "Скрипка",
        type: "Струнный",
        description: "Смычковый инструмент с нежным звучанием",
        price: 800
    },
    {
        id: 4,
        name: "Барабаны",
        type: "Ударный",
        description: "Основа ритма в музыке",
        price: 600
    }
];

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchInstrumentsApi = async () => {
    await delay(500);
    return [...instruments]; 
};

export const fetchInstrumentByIdApi = async (id) => {
    await delay(300);
    const instrument = instruments.find(inst => inst.id === Number(id));
    return instrument ? { ...instrument } : null; 
};

export const createInstrumentApi = async (instrument) => {
    await delay(500);
    const newInstrument = { ...instrument, id: Number(instrument.id) };
    instruments.push(newInstrument);
    return { ...newInstrument };
};

export const updateInstrumentApi = async (instrument) => {
    await delay(500);
    const index = instruments.findIndex(inst => inst.id === Number(instrument.id));
    if (index !== -1) {
        instruments[index] = { ...instrument };
        return { ...instruments[index] };
    }
    return null;
};

export const deleteInstrumentApi = async (id) => {
    await delay(500);
    instruments = instruments.filter(inst => inst.id !== Number(id));
    return id;
};