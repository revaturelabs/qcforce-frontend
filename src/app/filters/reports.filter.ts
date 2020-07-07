export function weekGraphData(state) {
  let multiData = [];
  let weekList = state.weekFilterOptions.slice(2);
  for (let i = 0; i < state.questionShortList.length; i++) {
    let qIndex = state.listShortQuestions.indexOf(state.questionShortList[i]);
    let data = weekList.map((week) => 0);
    for (let responseDatum of state.responseData) {
      let wIndex = weekList.indexOf(responseDatum.label);
      let value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        data[wIndex] = value;
      }
    }
    let label = state.questionShortList[i];
    multiData.push({ data, label });
  }
  return multiData;
}

export function oneWeekOneBatchData(state) {
  let multiData = [];
  let questionList = state.questionShortList;
  let data = questionList.map((q) => 0);
  for (let i = 0; i < questionList.length; i++) {
    if (state.responseData[0].data[state.questionLongList[i]]) {
      data[i] = state.responseData[0].data[state.questionLongList[i]];
    }
  }
  let label = `${state.batchFilter} (${state.weekFilter})`;
  multiData.push({ data, label });
  return multiData;
}

