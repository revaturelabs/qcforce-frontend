export function weekGraphData(state) {
  let multiData = [];
  let weekList = state.weekFilterOptions.slice(2);
  for (let i = 0; i < state.weekGraphQuestions.length; i++) {
    let qIndex = state.listShortQuestions.indexOf(state.weekGraphQuestions[i]);
    let data = weekList.map((week) => 0);
    for (let responseDatum of state.weekGraphData) {
      let wIndex = weekList.indexOf(responseDatum.label);
      let value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        data[wIndex] = value;
      }
    }
    let label = state.weekGraphQuestions[i];
    multiData.push({ data, label });
  }
  return multiData;
}

export function ratingGraphData(state) {
  let multiData = [];
  let questionList = state.ratingGraphQuestions;
  let data = questionList.map((q) => 0);
  for (let i = 0; i < questionList.length; i++) {
    let qIndex = state.listShortQuestions.indexOf(questionList[i]);
    let avg = 0;
    let num = 0;
    for (let responseDatum of state.ratingGraphData) {
      let value = responseDatum.data[state.listLongQuestions[qIndex]];
      if (value) {
        num++;
        avg = ((num-1)/num) * avg + (1/num) * value;
      }
    }
    data[i] = avg;
  }
  let label = `${state.batchFilter} (${state.weekFilter})`;
  multiData.push({ data, label });
  return multiData;
}

