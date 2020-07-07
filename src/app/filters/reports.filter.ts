export function weekGraphData(state) {
  let multiData = [];
  let weekList = state.weekFilterOptions.slice(2);
  for (let i = 0; i < state.questionShortList.length; i++) {
    let data = weekList.map((week) => 0);
    for (let responseDatum of state.responseData) {
      let wIndex = weekList.indexOf(responseDatum.label);
      if (responseDatum.data[state.questionLongList[i]]) {
        data[wIndex] = responseDatum.data[state.questionLongList[i]];
      }
    }
    let label = state.questionShortList[i];
    multiData.push({ data, label });
  }
  return multiData;
}
