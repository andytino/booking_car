<script lang="ts" setup>
import type { FormError } from "#ui/types";
import { STATUS, type IFormAccountState } from "./type";
import { ROLES } from "~/types/roles";
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
  urlBack?: string;
  isLoading?: boolean;
  isEdit?: boolean;
  user: IFormAccountState;
}

const props = withDefaults(defineProps<Props>(), {
  urlBack: ROUTES.home,
  isLoading: false,
  isEdit: false,
});
const emit = defineEmits(["submit"]);

const formAccountState = reactive<IFormAccountState>(props.user);

watch(
  () => props.user,
  () => {
    const { email, fullName, phoneNumber, isActive, role } = props.user;
    formAccountState.email = email;
    formAccountState.fullName = fullName;
    formAccountState.phoneNumber = phoneNumber;
    formAccountState.isActive = isActive;
    formAccountState.role = role;
  },
);

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: "email", message: "Bắt buộc!" });
  if (!state.password && !props.isEdit) errors.push({ path: "password", message: "Bắt buộc!" });
  if (!state.fullName) errors.push({ path: "fullName", message: "Bắt buộc!" });
  return errors;
};

const hdSubmit = () => {
  emit("submit", formAccountState);
};

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
      <CustomLoading v-if="isLoading"></CustomLoading>
      <UFormGroup name="email" class="w-full flex relative" required>
        <template #label>
          <span>Email</span>
        </template>
        <UInput v-model="formAccountState.email" class="ml-20 w-96" :disabled="isEdit" />
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

      <UFormGroup
        v-if="!isEdit"
        name="password"
        class="w-full flex gap-5 mt-7 relative"
        :required="!isEdit"
      >
        <template #label>
          <span>Mật khẩu</span>
        </template>
        <UInput v-model="formAccountState.password" type="password" class="ml-9 w-96" />
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

      <UFormGroup name="fullName" class="w-full flex gap-5 mt-7 relative" required>
        <template #label>
          <span>Họ và tên</span>
        </template>
        <UInput v-model="formAccountState.fullName" class="ml-9 w-96" />
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

      <UFormGroup name="phoneNumber" class="w-full flex gap-5 mt-7 relative">
        <template #label>
          <span>Số điện thoại</span>
        </template>
        <UInput v-model="formAccountState.phoneNumber" class="ml-5 w-96" />
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

      <UFormGroup name="role" class="w-full flex gap-5 mt-7">
        <template #label>
          <span>Vai trò</span>
        </template>
        <div class="flex gap-4 ml-16">
          <URadio
            v-for="role of roleOptions"
            :key="role.value"
            v-model="formAccountState.role"
            v-bind="role"
            :disabled="formAccountState.role === ROLES.admin"
          ></URadio>
        </div>
      </UFormGroup>

      <UFormGroup name="isActive" class="w-full flex gap-5 mt-7">
        <template #label>
          <span>Trạng thái</span>
        </template>
        <div class="flex gap-4 ml-10">
          <URadio
            v-for="status of statusOptions"
            :key="status.value"
            v-model="formAccountState.isActive"
            v-bind="status"
          ></URadio>
        </div>
      </UFormGroup>

      <div class="flex justify-center gap-5 mt-10 ml-32">
        <UButton
          class="w-32 flex justify-center"
          type="submit"
          color="green"
          variant="solid"
          :loading="isLoading"
        >
          <template v-if="!isEdit">Tạo</template>
          <template v-else>Cập nhật</template>
        </UButton>
        <UButton class="bg-gray-50 text-black w-32 flex justify-center" @click="hdCancel"
          >Huỷ</UButton
        >
      </div>
    </UForm>
  </div>
</template>
