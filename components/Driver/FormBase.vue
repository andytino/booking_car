<script lang="ts" setup>
import type { FormError } from "#ui/types";
import { STATUS, type IFormDriverState } from "./type";
import { ROUTES } from "~/constants/routes";

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
  driver: IFormDriverState;
}

const props = withDefaults(defineProps<Props>(), {
  urlBack: ROUTES.home,
  isLoading: false,
  isEdit: false,
});
const emit = defineEmits(["submit"]);

const formDriverState = reactive<IFormDriverState>(props.driver);

watch(
  () => props.driver,
  () => {
    const { email, fullName, phoneNumber, isActive, role, citizenId } = props.driver;
    formDriverState.email = email;
    formDriverState.fullName = fullName;
    formDriverState.phoneNumber = phoneNumber;
    formDriverState.isActive = isActive;
    formDriverState.role = role;
    formDriverState.citizenId = citizenId;
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
  emit("submit", formDriverState);
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
      :state="formDriverState"
      @submit="hdSubmit"
    >
      <CustomLoading v-if="isLoading"></CustomLoading>
      <UFormGroup name="email" class="w-full flex relative" required>
        <template #label>
          <span>Email</span>
        </template>
        <UInput v-model="formDriverState.email" class="ml-28 w-96" :disabled="isEdit" />
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
        <UInput v-model="formDriverState.password" type="password" class="ml-[70px] w-96" />
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
        <UInput v-model="formDriverState.fullName" class="ml-[70px] w-96" />
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
        <UInput v-model="formDriverState.phoneNumber" class="ml-14 w-96" />
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

      <UFormGroup name="citizenId" class="w-full flex gap-5 mt-7 relative">
        <template #label>
          <span>Căn cước công dân</span>
        </template>
        <UInput v-model="formDriverState.citizenId" class="ml-4 w-96" />
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

      <UFormGroup name="isActive" class="w-full flex gap-5 mt-7">
        <template #label>
          <span>Trạng thái</span>
        </template>
        <div class="flex gap-4 ml-[78px]">
          <URadio
            v-for="status of statusOptions"
            :key="status.value"
            v-model="formDriverState.isActive"
            v-bind="status"
          ></URadio>
        </div>
      </UFormGroup>

      <div class="flex justify-center gap-5 mt-10 ml-32">
        <UButton class="bg-secondary w-32 flex justify-center" type="submit" :loading="isLoading">
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
