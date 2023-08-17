import data from '../data/menu.common.json'

export const totalCount = data.length;
export const completeCount = data.filter(item => item.state === "complete").length;
export const curCount = totalCount - completeCount;
export const curPercent = ((completeCount / totalCount)*100).toFixed(0);