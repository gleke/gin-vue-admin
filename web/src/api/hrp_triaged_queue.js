import service from '@/utils/request'

// @Tags HrpTriagedQueue
// @Summary 创建HrpTriagedQueue
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HrpTriagedQueue true "创建HrpTriagedQueue"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hrpTriagedQueue/createHrpTriagedQueue [post]
export const createHrpTriagedQueue = (data) => {
     return service({
         url: "/hrpTriagedQueue/createHrpTriagedQueue",
         method: 'post',
         data
     })
 }


// @Tags HrpTriagedQueue
// @Summary 删除HrpTriagedQueue
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HrpTriagedQueue true "删除HrpTriagedQueue"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /hrpTriagedQueue/deleteHrpTriagedQueue [delete]
 export const deleteHrpTriagedQueue = (data) => {
     return service({
         url: "/hrpTriagedQueue/deleteHrpTriagedQueue",
         method: 'delete',
         data
     })
 }

// @Tags HrpTriagedQueue
// @Summary 删除HrpTriagedQueue
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除HrpTriagedQueue"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /hrpTriagedQueue/deleteHrpTriagedQueue [delete]
 export const deleteHrpTriagedQueueByIds = (data) => {
     return service({
         url: "/hrpTriagedQueue/deleteHrpTriagedQueueByIds",
         method: 'delete',
         data
     })
 }

// @Tags HrpTriagedQueue
// @Summary 更新HrpTriagedQueue
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HrpTriagedQueue true "更新HrpTriagedQueue"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /hrpTriagedQueue/updateHrpTriagedQueue [put]
 export const updateHrpTriagedQueue = (data) => {
     return service({
         url: "/hrpTriagedQueue/updateHrpTriagedQueue",
         method: 'put',
         data
     })
 }


// @Tags HrpTriagedQueue
// @Summary 用id查询HrpTriagedQueue
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HrpTriagedQueue true "用id查询HrpTriagedQueue"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /hrpTriagedQueue/findHrpTriagedQueue [get]
 export const findHrpTriagedQueue = (params) => {
     return service({
         url: "/hrpTriagedQueue/findHrpTriagedQueue",
         method: 'get',
         params
     })
 }


// @Tags HrpTriagedQueue
// @Summary 分页获取HrpTriagedQueue列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.PageInfo true "分页获取HrpTriagedQueue列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /hrpTriagedQueue/getHrpTriagedQueueList [get]
 export const getHrpTriagedQueueList = (params) => {
     return service({
         url: "/hrpTriagedQueue/getHrpTriagedQueueList",
         method: 'get',
         params
     })
 }