<template>
  <div>
    <div class="search-term">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">                                                                      
        <el-form-item>
          <el-button @click="onSubmit" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="openDialog" type="primary">新增hrpTriagedQueue表</el-button>
        </el-form-item>
        <el-form-item>
          <el-popover placement="top" v-model="deleteVisible" width="160">
            <p>确定要删除吗？</p>
              <div style="text-align: right; margin: 0">
                <el-button @click="deleteVisible = false" size="mini" type="text">取消</el-button>
                <el-button @click="onDelete" size="mini" type="primary">确定</el-button>
              </div>
            <el-button icon="el-icon-delete" size="mini" slot="reference" type="danger">批量删除</el-button>
          </el-popover>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      @selection-change="handleSelectionChange"
      border
      ref="multipleTable"
      stripe
      style="width: 100%"
      tooltip-effect="dark"
    >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column label="日期" width="180">
         <template slot-scope="scope">{{scope.row.CreatedAt|formatDate}}</template>
    </el-table-column>
    
    <el-table-column label="Created on" prop="createDate" width="120"></el-table-column> 
    
    <el-table-column label="Last Updated by" prop="writeUid" width="120"></el-table-column> 
    
    <el-table-column label="Created by" prop="createUid" width="120"></el-table-column> 
    
    <el-table-column label="修改时间" prop="writeDate" width="120"></el-table-column> 
    
    <el-table-column label=" 队列名称ID" prop="queueNameId" width="120"></el-table-column> 
    
    <el-table-column label="queueId字段" prop="queueId" width="120"></el-table-column> 
    
    <el-table-column label="执行设备" prop="equipmentId" width="120"></el-table-column> 
    
    <el-table-column label="患者" prop="partnerId" width="120"></el-table-column> 
    
    <el-table-column label="门诊号" prop="outpatientNo" width="120"></el-table-column> 
    
    <el-table-column label="姓名拼音" prop="spell" width="120"></el-table-column> 
    
    <el-table-column label="医生" prop="triagedEmployeeIds" width="120"></el-table-column> 
    
    <el-table-column label="诊室" prop="triagedRoomIds" width="120"></el-table-column> 
    
    <el-table-column label="顺序号" prop="orderNo" width="120"></el-table-column> 
    
    <el-table-column label="顺序号" prop="showOrderNo" width="120"></el-table-column> 
    
    <el-table-column label="appointmentTrue字段" prop="appointmentTrue" width="120"></el-table-column> 
    
    <el-table-column label="复诊" prop="reconsultationTrue" width="120"></el-table-column> 
    
    <el-table-column label="加急" prop="emergTrue" width="120"></el-table-column> 
    
    <el-table-column label="号类" prop="registerTypeId" width="120"></el-table-column> 
    
    <el-table-column label="时效" prop="active" width="120"></el-table-column> 
    
    <el-table-column label="就诊状态" prop="state" width="120"></el-table-column> 
    
    <el-table-column label="stage字段" prop="stage" width="120"></el-table-column> 
    
    <el-table-column label="departmentId字段" prop="departmentId" width="120"></el-table-column> 
    
    <el-table-column label="name字段" prop="name" width="120"></el-table-column> 
    
    <el-table-column label="registerType字段" prop="registerType" width="120"></el-table-column> 
    
    <el-table-column label="sex字段" prop="sex" width="120"></el-table-column> 
    
    <el-table-column label="old字段" prop="old" width="120"></el-table-column> 
    
    <el-table-column label="diagnoseEmployeeId字段" prop="diagnoseEmployeeId" width="120"></el-table-column> 
    
    <el-table-column label="diagnoseRoomId字段" prop="diagnoseRoomId" width="120"></el-table-column> 
    
    <el-table-column label="diagnoseEquipmentId字段" prop="diagnoseEquipmentId" width="120"></el-table-column> 
    
    <el-table-column label="diagnoseTime字段" prop="diagnoseTime" width="120"></el-table-column> 
    
    <el-table-column label="happenDatetime字段" prop="happenDatetime" width="120"></el-table-column> 
    
    <el-table-column label="triageDatetime字段" prop="triageDatetime" width="120"></el-table-column> 
    
    <el-table-column label="inpatientNo字段" prop="inpatientNo" width="120"></el-table-column> 
    
    <el-table-column label="queueGroupId字段" prop="queueGroupId" width="120"></el-table-column> 
    
    <el-table-column label="queuePriorityLevel字段" prop="queuePriorityLevel" width="120"></el-table-column> 
    
      <el-table-column label="按钮组">
        <template slot-scope="scope">
          <el-button @click="updateHrpTriagedQueue(scope.row)" size="small" type="primary">变更</el-button>
          <el-popover placement="top" width="160" v-model="scope.row.visible">
            <p>确定要删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="deleteHrpTriagedQueue(scope.row)">确定</el-button>
            </div>
            <el-button type="danger" icon="el-icon-delete" size="mini" slot="reference">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="page"
      :page-size="pageSize"
      :page-sizes="[10, 30, 50, 100]"
      :style="{float:'right',padding:'20px'}"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>

    <el-dialog :before-close="closeDialog" :visible.sync="dialogFormVisible" title="弹窗操作">
      此处请使用表单生成器生成form填充 表单默认绑定 formData 如手动修改过请自行修改key
      <div class="dialog-footer" slot="footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button @click="enterDialog" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
    createHrpTriagedQueue,
    deleteHrpTriagedQueue,
    deleteHrpTriagedQueueByIds,
    updateHrpTriagedQueue,
    findHrpTriagedQueue,
    getHrpTriagedQueueList
} from "@/api/hrp_triaged_queue";  //  此处请自行替换地址
import { formatTimeToStr } from "@/utils/data";
import infoList from "@/components/mixins/infoList";

export default {
  name: "HrpTriagedQueue",
  mixins: [infoList],
  data() {
    return {
      listApi: getHrpTriagedQueueList,
      dialogFormVisible: false,
      visible: false,
      type: "",
      deleteVisible: false,
      multipleSelection: [],formData: {
        createDate:null,writeUid:null,createUid:null,writeDate:null,queueNameId:null,queueId:null,equipmentId:null,partnerId:null,outpatientNo:null,spell:null,triagedEmployeeIds:null,triagedRoomIds:null,orderNo:null,showOrderNo:null,appointmentTrue:null,reconsultationTrue:null,emergTrue:null,registerTypeId:null,active:null,state:null,stage:null,departmentId:null,name:null,registerType:null,sex:null,old:null,diagnoseEmployeeId:null,diagnoseRoomId:null,diagnoseEquipmentId:null,diagnoseTime:null,happenDatetime:null,triageDatetime:null,inpatientNo:null,queueGroupId:null,queuePriorityLevel:null,
      }
    };
  },
  filters: {
    formatDate: function(time) {
      if (time != null && time != "") {
        var date = new Date(time);
        return formatTimeToStr(date, "yyyy-MM-dd hh:mm:ss");
      } else {
        return "";
      }
    },
    formatBoolean: function(bool) {
      if (bool != null) {
        return bool ? "是" :"否";
      } else {
        return "";
      }
    }
  },
  methods: {
      //条件搜索前端看此方法
      onSubmit() {
        this.page = 1
        this.pageSize = 10                                       
        this.getTableData()
      },
      handleSelectionChange(val) {
        this.multipleSelection = val
      },
      async onDelete() {
        const ids = []
        this.multipleSelection &&
          this.multipleSelection.map(item => {
            ids.push(item.ID)
          })
        const res = await deleteHrpTriagedQueueByIds({ ids })
        if (res.code == 0) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.deleteVisible = false
          this.getTableData()
        }
      },
    async updateHrpTriagedQueue(row) {
      const res = await findHrpTriagedQueue({ ID: row.ID });
      this.type = "update";
      if (res.code == 0) {
        this.formData = res.data.rehrpTriagedQueue;
        this.dialogFormVisible = true;
      }
    },
    closeDialog() {
      this.dialogFormVisible = false;
      this.formData = {
        
          createDate:null,
          writeUid:null,
          createUid:null,
          writeDate:null,
          queueNameId:null,
          queueId:null,
          equipmentId:null,
          partnerId:null,
          outpatientNo:null,
          spell:null,
          triagedEmployeeIds:null,
          triagedRoomIds:null,
          orderNo:null,
          showOrderNo:null,
          appointmentTrue:null,
          reconsultationTrue:null,
          emergTrue:null,
          registerTypeId:null,
          active:null,
          state:null,
          stage:null,
          departmentId:null,
          name:null,
          registerType:null,
          sex:null,
          old:null,
          diagnoseEmployeeId:null,
          diagnoseRoomId:null,
          diagnoseEquipmentId:null,
          diagnoseTime:null,
          happenDatetime:null,
          triageDatetime:null,
          inpatientNo:null,
          queueGroupId:null,
          queuePriorityLevel:null,
      };
    },
    async deleteHrpTriagedQueue(row) {
      this.visible = false;
      const res = await deleteHrpTriagedQueue({ ID: row.ID });
      if (res.code == 0) {
        this.$message({
          type: "success",
          message: "删除成功"
        });
        this.getTableData();
      }
    },
    async enterDialog() {
      let res;
      switch (this.type) {
        case "create":
          res = await createHrpTriagedQueue(this.formData);
          break;
        case "update":
          res = await updateHrpTriagedQueue(this.formData);
          break;
        default:
          res = await createHrpTriagedQueue(this.formData);
          break;
      }
      if (res.code == 0) {
        this.$message({
          type:"success",
          message:"创建/更改成功"
        })
        this.closeDialog();
        this.getTableData();
      }
    },
    openDialog() {
      this.type = "create";
      this.dialogFormVisible = true;
    }
  },
  async created() {
    await this.getTableData();}
};
</script>

<style>
</style>