<script lang="ts" setup>
import { ref } from "vue";
import api from "../api/index.js";

const firstName = ref("");
const lastName = ref("");
const dateOfBirth = ref("");
const gender = ref("");
const email = ref("");
const phoneNumber = ref("");
const city = ref("");
const postalCode = ref("");
const country = ref("");
const createdAt = ref(new Date().toISOString());
const updatedAt = ref(new Date().toISOString());
const encryptedPassword = ref("");
const ssnHash = ref("");
const emergencyContactName = ref("");
const emergencyContactPhone = ref("");
const address = ref("");



const xinzen = async () => {
  try {
    const data = {
      address: address.value,
      city: city.value,
      country: country.value,
      createdAt: createdAt.value,
      dateOfBirth: new Date(dateOfBirth.value).toISOString(),
      //将时间转化为文本值
      email: email.value,
      emergencyContactName: emergencyContactName.value,
      emergencyContactPhone: emergencyContactPhone.value,
      encryptedPassword: encryptedPassword.value,
      firstName: firstName.value,
      gender: gender.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      postalCode: postalCode.value,
      profilePicture: null,
      ssnHash: ssnHash.value,
      updatedAt: updatedAt.value,
    };

    console.log(data)

    const response = await api.getinsert(data);



    alert("成功")
  } catch {
    alert("失败")
  }
}

</script>

<template>
  <div>
    <el-form label-width="120px">
      <el-form-item label="First Name">
        <el-input v-model="firstName" placeholder="Enter first name" />
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="lastName" placeholder="Enter last name" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="email" placeholder="Enter email" />
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="phoneNumber" placeholder="Enter phone number" />
      </el-form-item>
      <el-form-item label="City">
        <el-input v-model="city" placeholder="Enter city" />
      </el-form-item>
      <el-form-item label="Postal Code">
        <el-input v-model="postalCode" placeholder="Enter postal code" />
      </el-form-item>
      <el-form-item label="Country">
        <el-input v-model="country" placeholder="Enter country" />
      </el-form-item>
      <el-form-item label="Emergency Contact Name">
        <el-input
          v-model="emergencyContactName"
          placeholder="Enter emergency contact name"
        />
      </el-form-item>
      <el-form-item label="Emergency Contact Phone">
        <el-input
          v-model="emergencyContactPhone"
          placeholder="Enter emergency contact phone"
        />
      </el-form-item>
      <el-form-item label="Address">
        <el-input
          v-model="address"
          type="textarea"
          placeholder="Enter address"
        />
      </el-form-item>

      <el-form-item label="Date of Birth">
        <el-date-picker
        v-model="dateOfBirth"
        type="date"
        placeholder="Pick a day"
      />
      </el-form-item>
      <el-form-item label="Gender 必选项">
        <el-select v-model="gender" placeholder="Select gender">
          <el-option label="Male" value="male" />
          <el-option label="Female" value="female" />
          <el-option label="Other" value="other" />
        </el-select>
      </el-form-item>

      <el-form-item label="Created At">
        <el-input
          v-model="createdAt"
          :disabled="true"
          placeholder="Auto-generated"
        />
      </el-form-item>
      <el-form-item label="Updated At">
        <el-input
          v-model="updatedAt"
          :disabled="true"
          placeholder="Auto-generated"
        />
      </el-form-item>

      <el-form-item label="Password">
        <el-input
          v-model="encryptedPassword"
          type="password"
          show-password
          placeholder="Enter password"
        />
      </el-form-item>

      <el-form-item label="SSN Hash">
        <el-input
          v-model="ssnHash"
          :disabled="true"
          placeholder="Should be hidden or read-only"
        />
      </el-form-item>
      <div class="mb-4">
        <el-button @click="xinzen" type="success">新增记录</el-button>
      </div>
    </el-form>
  </div>
</template>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>