import HadithModel from "./models/hadithSchema";

export default async function seed() {
  const data = await HadithModel.findOne();
  if (!data) {
    await HadithModel.create({
      text: "فضل الصلاة",
      title:
        "قال رسول الله - صلى الله عليه وسلم - (أفضل الصلاة بعد المكتوبة الصلاة في جوف الليل، وأفضل الصيام بعد شهر رمضان شهر الله المحرم) صحيح مسلم.",
    });
    await HadithModel.create({
      text: "فضل الصلاة",
      title:
        "قال رسول الله - صلى الله عليه وسلم - (ما من مسلم يتوضأ فيحسن وضوءه ثم يقوم فيصل ركعتين يقبل عليهما بقلبه ووجهه إلا وجبت له الجنة) صحيح مسلم وأبو داود.",
    });
    await HadithModel.create({
      text: "فضل الصلاة",
      title:
        "قال رسول الله - صلى الله عليه وسلم - (اعلموا أن خير أعمالكم الصلاة ولا يحافظ على الوضوء إلا مؤمن) صحيح أحمد وابن ماجه.",
    });
    await HadithModel.create({
      text: "فضل الصلاة",
      title:
        "قال رسول الله - صلى الله عليه وسلم - (من حافظ على أربع ركعات قبل الظهر، وأربع بعدها حرّم على النار) صحيح حاكم.",
    });
  }
}
