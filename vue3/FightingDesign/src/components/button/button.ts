import type { PropType, ExtractPropTypes, VNode, Component } from "vue";
import type {
  ButtonSizeType,
  // ButtonTargetType,
  ButtonType,
  ButtonNativeType,
} from "./interface";

export const Props = {
  // 是否加载中效果
  loading: {
    type: Boolean,
    default: false,
  },

  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },

  // 按钮类型
  type: {
    type: String as PropType<ButtonType>,
    default: "default",
    validator: (val: ButtonType): boolean => {
      return (
        ["default", "primary", "success", "danger", "warning"] as const
      ).includes(val);
    },
  },

  // 按钮类型
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: "button",
    validator: (val: ButtonNativeType): boolean => {
      return (["button", "submit", "reset"] as const).includes(val);
    },
  },

  // 按钮大小
  size: {
    type: String as PropType<ButtonSizeType>,
    default: "middle",
  },

  // 配置简约的按钮  -- 暂时不开发
  // simple: {
  //   type: Boolean,
  //   default: false,
  // },

  // 圆角
  round: {
    type: Boolean,
    default: false,
  },

  color: {
    type: String,
    default: "",
  },
} as const;
