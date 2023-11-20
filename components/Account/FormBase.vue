<script lang="ts" setup>
import { ROLES } from "~/types/roles";
import type { FormError } from "#ui/types";
import { STATUS, type IFormAccountState } from "./type";
import { ROUTES } from "~/constants/routes";

const roleOptions = [
  {
    label: "Admin",
    value: ROLES.admin,
  },
  {
    label: "Nhân viên",
    value: ROLES.staff,
  },
];

const statusOptions = [
  {
    label: "Hoạt động",
    value: STATUS.ACTIVE,
  },
  {
    label: "Không hoạt động",
    value: STATUS.INACTIVE,
  },
];

interface Props {
  urlBack: string;
}

const props = withDefaults(defineProps<Props>(), {
  urlBack: ROUTES.home,
});

const formAccountState = reactive<IFormAccountState>({
  email: "",
  password: "",
  fullName: "",
  role: ROLES.staff,
  isActive: STATUS.ACTIVE,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Bắt buộc!" });
  if (!state.password) errors.push({ path: "password", message: "Bắt buộc!" });
  if (!state.fullName) errors.push({ path: "fullName", message: "Bắt buộc!" });
  return errors;
};

const hdSubmit = () => {};

const hdCancel = () => {
  navigateTo(props.urlBack);
};
</script>
<template>
  <div>
    <UForm
      class="flex flex-col items-start"
      :validate="validate"
      :state="formAccountState"
      @submit="hdSubmit"
    >
      <UFormGroup name="email" class="w-full flex relative" required>
        <template #label>
          <span>Email</span>
        </template>
        <UInput v-model="formAccountState.email" class="ml-20" />
        <template #error="{ error }">
          <span
            v-if="error"
            class="absolute left-32 -bottom-4"
            :class="[error ? 'text-red-500 dark:text-red-400' : '']"
          >
            {{ error ? error : "lỗi" }}
          </span>
        </template>
      </UFormGroup>

      <UFormGroup name="password" class="w-96 flex gap-5 mt-7 relative" required>
        <template #label>
          <span>Mật khẩu</span>
        </template>
        <UInput v-model="formAccountState.password" type="password" class="ml-9" />
        <template #error="{ error }">
          <span
            v-if="error"
            class="absolute left-32 -bottom-4"
            :class="[error ? 'text-red-500 dark:text-red-400' : '']"
          >
            {{ error ? error : "lỗi" }}
          </span>
        </template>
      </UFormGroup>

      <UFormGroup name="fullName" class="w-96 flex gap-5 mt-7 relative" required>
        <template #label>
          <span>Họ và tên</span>
        </template>
        <UInput v-model="formAccountState.fullName" class="ml-9" />
        <template #error="{ error }">
          <span
            v-if="error"
            class="absolute left-32 -bottom-4"
            :class="[error ? 'text-red-500 dark:text-red-400' : '']"
          >
            {{ error ? error : "lỗi" }}
          </span>
        </template>
      </UFormGroup>

      <UFormGroup name="role" class="w-full flex gap-5 mt-7" required>
        <template #label>
          <span>Vai trò</span>
        </template>
        <div class="flex gap-4 ml-14">
          <URadio
            v-for="role of roleOptions"
            :key="role.value"
            v-model="formAccountState.role"
            v-bind="role"
          ></URadio>
        </div>
      </UFormGroup>

      <UFormGroup name="isActive" class="w-full flex gap-5 mt-7" required>
        <template #label>
          <span>Trạng thái</span>
        </template>
        <div class="flex gap-4 ml-8">
          <URadio
            v-for="status of statusOptions"
            :key="status.value"
            v-model="formAccountState.isActive"
            v-bind="status"
          ></URadio>
        </div>
      </UFormGroup>

      <div class="flex justify-center gap-5 mt-10 ml-32">
        <UButton class="bg-secondary w-20 flex justify-center" type="submit">Tạo</UButton>
        <UButton class="bg-gray-50 text-black w-20 flex justify-center" @click="hdCancel"
          >Huỷ</UButton
        >
      </div>
    </UForm>
  </div>
</template>
