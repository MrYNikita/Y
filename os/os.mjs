import os from "os";

//#region getIP 0.0.0

/**
 * @typedef TBgetIP
 * @prop {string} type
 * @typedef {TBgetIP} TgetIP
*/
  
/** @param {TgetIP} t */
function getIPDeceit(t) {
    
    try {
        
        return getIPVerify(t);
        
    } catch (e) {
        
        if (config.strict) throw e;
        
        return undefined;
        
    };
    
};
/** @param {TgetIP} t */
function getIPVerify(t) {
    
    const {
    
    
    
    } = t;
    
    return getIPHandle(t);
   
};
/** @param {TgetIP} t */
function getIPHandle(t) {
   
    let {
    
    
    
    } = t;
    
    
    
    t = {
        
        ...t,
        
    };
   
    return getIPComply(t);
   
};
/** @param {TgetIP} t */
function getIPComply(t) {
   
    const {
    
        type,
    
    } = t;
    
    const net = Object.values(os.networkInterfaces());

    switch (type) {

        default: return net[0][1].address;

    };
    
};

/**
 * Функция для получения IP устройства по беспроводной сети.
 * - Версия `0.0.0`
 * - Цепочка `DVHCa`
*/
export function osGetIP() {

    return getIPDeceit({  });

};

//#endregion