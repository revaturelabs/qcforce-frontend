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
  let multiDataSet = []
  if (wF !== "All" && bF !== "All") {
    let data = calculate(state.responseData, state.ratingGraph.labels, bF, wF);
    let label = `${bF} (${wF})`;
    multiDataSet.push({ data, label });
  } else if (wF === "All" && bF !== "All") {
    for (let wFOption of state.weekFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bF, wFOption);
      let label = `${bF} (${wFOption})`;
      multiDataSet.push({ data, label });
    }
  } else if (wF !== "All" && bF === "All") {
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let data = calculate(state.responseData, state.ratingGraph.labels, bFOption, wF);
      let label = `${bFOption} (${wF})`;
      multiDataSet.push({ data, label });
    }
  }
  return multiDataSet;
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
  let multiDataSet = [];
  if (wF !== "All" && bF !== "All") {
    let singleData = calcPace(state.responseData, state.paceGraph.labels,bF, wF); 
    multiDataSet.push(singleData);
  } else if (wF === "All" && bF !== "All") {
    for (let wFOption of state.weekFilterOptions.slice(2)) {
      let singleData = calcPace(state.responseData, state.paceGraph.labels, bF, wFOption);
      multiDataSet.push(singleData);
    }
  } else if (wF !== "All" && bF === "All") {
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let singleData = calcPace(state.responseData, state.paceGraph.labels, bFOption, wF);
      multiDataSet.push(singleData);
    } 
  }
  return multiDataSet;
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
  let multiDataSet = [];
  if (bF !== "All") {
    let singleData = calcMajor(state.responseData, state.majorGraph.labels, bF);
    multiDataSet.push(singleData);
  } else {
    for (let bFOption of state.batchFilterOptions.slice(2)) {
      let singleData = calcMajor(state.responseData, state.majorGraph.labels, bFOption);
      multiDataSet.push(singleData);
    } 
  }
  return multiDataSet;
}

export function graphFilter(state){
  majorGraphFilter(state);
  paceGraphFilter(state);
  ratingGraphFilter(state);
  return state;
}
