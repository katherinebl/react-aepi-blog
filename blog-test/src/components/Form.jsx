import { useForm } from "react-hook-form";
export default function Form(){

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" name="title" ref={register} />
      </div>
      <div className="form-control">
        <label>Content</label>
        <input type="text" name="content" ref={register} />
      </div>
      <div className="form-control">
        <label>Author</label>
        <input type="text" name="author" ref={register} />
      </div>
      <div className="form-control">
        <label></label>
        <button type="submit">Post it!</button>
      </div>
    </form>
  );
}