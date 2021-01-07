import { apis } from "../../../services";

export const developer = async ({ data, cbSuccess, cbFailure }) => {
  try {
    await apis.developer(data);
    cbSuccess();
  } catch (e) {
    cbFailure(e.message);
  }
};
