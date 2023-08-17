import { completeCount, curPercent, curCount, totalCount } from "../../data/countData";

export const ProjectStatus = () => {
  return (
    <span className="pg_status">
      <span className="num total">
        <span className="num">본수</span><strong className="num">{totalCount}</strong>
      </span>
      <span className="num working">
        <span className="num">진행본수</span><strong className="num">{curCount}</strong>
      </span>
      <span className="num cp_num">
        <span className="num">완료본수</span><strong className="num">{completeCount}</strong>
      </span>
      <span className="pg_status_box">
        <span className="ing">진행률 : <strong className="num">{curPercent}</strong>%</span> <span className="pgraph"><span className="bar" style={{width: `${curPercent}%`}}></span></span>
      </span>
    </span>
  )
}