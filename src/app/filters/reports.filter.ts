function _batchClearence(answer, batch) {
  if (batch === 'Average') {
    return true;
  } else {
    return answer.batch === batch;
  }
}

function _weekClearence(answer, week) {
  if (week === 'Average') {
    return true;
  } else {
    return answer.week === week;
  }
}

function calculate(data, questionList, batch, week) {
  const avg = questionList.map(() => 0);
  const num = questionList.map(() => 0);
  for (const answer of data) {
    const qIndex = questionList.indexOf(answer.question);
    if (qIndex !== -1 &&
      _batchClearence(answer, batch) &&
      _weekClearence(answer, week))
    {
      const val = answer.answer * 1;
      num[qIndex]++;
      avg[qIndex] = ((num[qIndex] - 1) / num[qIndex]) * avg[qIndex] + (1 / num[qIndex]) * val;
    }
  }
  return avg;
}

function calculateByWeek(data, weekList, batch, question) {
  const avg = weekList.map(() => 0);
  const num = weekList.map(() => 0);
  for (const answer of data) {
    const wIndex = weekList.indexOf(answer.week);
    if (wIndex !== -1 &&
      _batchClearence(answer, batch) && answer.question === question)
    {
      const val = answer.answer * 1;
      num[wIndex]++;
      avg[wIndex] = ((num[wIndex] - 1) / num[wIndex]) * avg[wIndex] + (1 / num[wIndex]) * val;
    }
  }
  return avg;
}


export function ratingGraphFilter(state) {
  const bF = state.batchFilter;
  const wF = state.weekFilter;
  const multiDataSet = [];
  if (wF !== 'All' && bF !== 'All') {
    const data = calculate(state.responseData, state.ratingGraph.labels, bF, wF);
    const label = `${bF} (${wF})`;
    multiDataSet.push({ data, label });
  } else if (wF !== 'All' && bF === 'All') {
    for (const bFOption of state.batchFilterOptions.slice(2)) {
      const data = calculate(state.responseData, state.ratingGraph.labels, bFOption, wF);
      const label = `${bFOption} (${wF})`;
      multiDataSet.push({ data, label });
    }
  }
  return multiDataSet;
}

export function weeklyGraphFilter(state) {
  const bF = state.batchFilter;
  const wF = state.weekFilter;
  const multiDataSet = [];
  if (wF === 'All' && bF !== 'All') {
    for (const question of state.questionList) {
      const data = calculateByWeek(state.responseData, state.weekFilterOptions.slice(2), bF, question);
      const label = question;
      multiDataSet.push({ data, label });
    }
  }
  return multiDataSet;
}

function calcPace(data, labels, batch, week) {
  const singledata = [0, 0, 0];
  for (const answer of data) {
    if (answer.question === 'Pace of Training' &&
      _batchClearence(answer, batch) &&
      _weekClearence(answer, week))
    {
      const i = labels.indexOf(answer.answer);
      singledata[i]++;
    }
  }
  return singledata;
}

export function paceGraphFilter(state) {
  const bF = state.batchFilter;
  const wF = state.weekFilter;
  const multiDataSet = [];
  if (wF !== 'All' && bF !== 'All') {
    const singleData = calcPace(state.responseData, state.paceGraph.labels, bF, wF);
    multiDataSet.push(singleData);
  } else if (wF === 'All' && bF !== 'All') {
    for (const wFOption of state.weekFilterOptions.slice(2)) {
      const singleData = calcPace(state.responseData, state.paceGraph.labels, bF, wFOption);
      multiDataSet.push(singleData);
    }
  } else if (wF !== 'All' && bF === 'All') {
    for (const bFOption of state.batchFilterOptions.slice(2)) {
      const singleData = calcPace(state.responseData, state.paceGraph.labels, bFOption, wF);
      multiDataSet.push(singleData);
    }
  }
  return multiDataSet;
}

function calcMajor(data, labels, batch) {
  const singledata = [0, 0, 0];
  for (const answer of data) {
    if (answer.question === 'Background' &&
      _batchClearence(answer, batch))
    {
      const i = labels.indexOf(answer.answer);
      singledata[i]++;
    }
  }
  return singledata;
}


export function majorGraphFilter(state) {
  // tslint:disable-next-line: prefer-const
  let bF = state.batchFilter;
  // tslint:disable-next-line: prefer-const
  let multiDataSet = [];
  if (bF !== 'All') {
    // tslint:disable-next-line: prefer-const
    let singleData = calcMajor(state.responseData, state.majorGraph.labels, bF);
    multiDataSet.push(singleData);
  } else {
    for (const bFOption of state.batchFilterOptions.slice(2)) {
      const singleData = calcMajor(state.responseData, state.majorGraph.labels, bFOption);
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
