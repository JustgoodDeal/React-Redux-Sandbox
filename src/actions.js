export const inc = () => ({type: 'INC'});

export const dec = () => ({type: 'DEC'});

export const rand = () => {
    return {
        type: 'RANDOM',
        payload: Math.floor(Math.random()*10)
    }
};
