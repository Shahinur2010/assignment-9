const addToDb = id => {
    let appliedJob = getAppliedJob();
    if (!appliedJob.find(job => job.id == id.id)) {
        appliedJob.push(id);
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const getAppliedJob = () => {
    let appliedJob = [];

    const storedJob = localStorage.getItem('applied-job');
    if (storedJob) {
        appliedJob = JSON.parse(storedJob);
    }
    return appliedJob;
}

export { addToDb, getAppliedJob }


