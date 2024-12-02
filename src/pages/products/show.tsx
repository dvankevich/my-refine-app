import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
  const { data, isLoading } = useOne({ resource: "products", id: 123 });

  if (isLoading) {
    return <div>Loading...</div>;
  }
// {data?.data.name}: Це вираз, який використовує опціональний ланцюг (?.). 
// Він перевіряє, чи існує об'єкт data і його властивість data. Якщо обидва існують, то 
// буде повернене значення name. Якщо ж data або data.data не існує 
// (т.е. є null або undefined), то вираз не викличе помилку і поверне undefined.
  return <div>Product name: {data?.data.name}</div>;
};