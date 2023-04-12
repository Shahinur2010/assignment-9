const addToDb = id => {
    let appliedJob = getAppliedJob();
    
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        appliedJob[id] = newQuantity;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const getAppliedJob = () => {
    let appliedJob = {};

    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

export {addToDb, getAppliedJob}


