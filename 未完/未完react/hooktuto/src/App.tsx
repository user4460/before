import "./styles.css";
//useFormとは、フォームの状態を管理するためのカスタムフック
//SubmitHandlerとは、フォームの送信時に実行される関数の型
import { useForm, SubmitHandler } from "react-hook-form";

type FormInput = {
  name: string;
  age: number;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  //定義
  //SubmitHandler<TFieldValues extends FieldValues> = (data: TFieldValues, event?: React.BaseSyntheticEvent) => any | Promise<any>;
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        名前
        <input {...register("name", { required: true })} />
      </label>
      {/* 未入力の場合は、バリデーションが失敗してエラーになる */}
      {/* erros.nameが値が入る（undefind）ので、右辺のpタグが評価される */}
      {errors.name && <p className="error">名前欄の入力は必須です</p>}
      <label>
        年齢
        <input
          type="number"
          {...register("age", {
            // バリデーションごとにエラーメッセージを設定する場合は、オブジェクト形式でvalueとmessageを設定する
            required: { value: true, message: "年齢欄の入力は必須です" },
            min: { value: 0, message: "入力できる最小値は0です" },
            max: { value: 150, message: "入力できる最大値は150です" },
          })}
        />
        歳
      </label>
      {/* errors.age.messageを参照すると、バリデーションが失敗した項目のメッセージが取得できる */}
      {errors.age && <p className="error">{errors.age.message}</p>}
      <button>送信する</button>
    </form>
  );
}
