const checkOnline = value =>{
    if (value) return `OnLine`;
    if (!value) return `OffLine`;
}

export default checkOnline;