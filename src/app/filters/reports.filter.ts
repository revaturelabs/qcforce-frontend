function _batchClearence(answer, batch) {
  if (batch === "Average") {
    return true;
  } else {
    return answer.batch === batch;
  }
}

function _weekClearence(answer, week) {
  if (week === "Average") {
    return true;
  } else {
    return answer.week === week;
  }
}

function calculate(data, questionList, batch, week) {
  let avg = questionList.map(() => 0);
  let num = questionList.map(() => 0);
  for (let answer of data) {
    let qIndex = questionList.indexOf(answer.question);
    if (qIndex != -1 && 
      _batchClearence(answer, batch) && 
      _weekClearence(answer, week)) 
    {
      let val = answer.answer * 1;
      num[qIndex]++;
      avg[qIndex] = ((num[qIndex] - 1) / num[qIndex]) * avg[qIndex] + (1 / num[qIndex]) * val;
    }
  }
  return avg;
}

export function ratingGraphFilter(state) {
  let bF = state.batchFilter;
  let wF = state.weekFilter;
  if (wF !== "All" && bF !== "All") {
    let data = calculate(state.responseData, state.ratingGraph.labels, bF, wF);
    let label = `${bF} (${wF})`;
    state.ratingGraph.data = [];
    state.ratingGraph.data.push({ data, label });
  } else if (wF === "All" && bF !== "All") {
    state.ratingGraph.data = [];
    for (let wFOption of state.weekFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bF, wFOption);
      let label = `${bF} (${wFOption})`;
      state.ratingGraph.data.push({ data, label });
    }
  } else if (wF !== "All" && bF === "All") {
    state.ratingGraph.data = [];
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bFOption, wF);
      let label = `${bFOption} (${wF})`;
      state.ratingGraph.data.push({ data, label });
    }
  }
  return state;
}

function calcPace(data, labels, batch, week) {
  let singledata = [0,0,0];
  for (let answer of data) {
    if (answer.question === "Pace of Training" &&
      _batchClearence(answer, batch) && 
      _weekClearence(answer, week)) 
    {
      let i = labels.indexOf(answer.answer);
      singledata[i]++;
    }
  }
  return singledata;
}

export function paceGraphFilter(state) {
  let bF = state.batchFilter;
  let wF = state.weekFilter;
  if (wF !== "All" && bF !== "All") {
    let singleData = calcPace(state.responseData, state.paceGraph.labels,bF, wF); 
    state.paceGraph.data = []
    state.paceGraph.data.push(singleData);
  } else if (wF === "All" && bF !== "All") {
    state.paceGraph.data = []
    for (let wFOption of state.weekFilterOptions.slice(2)) {
      let singleData = calcPace(state.responseData, state.paceGraph.labels, bF, wFOption);
      state.paceGraph.data.push(singleData);
    }
  } else if (wF !== "All" && bF === "All") {
    state.paceGraph.data = []
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let singleData = calcPace(state.responseData, state.paceGraph.labels, bFOption, wF);
      state.paceGraph.data.push(singleData);
    } 
  }
  return state;
}

function calcMajor(data, labels, batch) {
  let singledata = [0,0,0];
  for (let answer of data) {
    if (answer.question === "Background" &&
      _batchClearence(answer, batch))
    {
      let i = labels.indexOf(answer.answer);
      singledata[i]++;
    }
  }
  return singledata;
}


export function majorGraphFilter(state) {
  let bF = state.batchFilter;
  if (bF !== "All") {
    let singleData = calcMajor(state.responseData, state.majorGraph.labels, bF);
    state.majorGraph.data = [];
    state.majorGraph.data.push(singleData);
  } else {
    state.majorGraph.data = [];
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let singleData = calcMajor(state.responseData, state.majorGraph.labels, bFOption);
      state.majorGraph.data.push(singleData);
    } 
  }
  return state;
}

export function graphFilter(state){
  majorGraphFilter(state);
  paceGraphFilter(state);
  ratingGraphFilter(state);
  return state;
}
