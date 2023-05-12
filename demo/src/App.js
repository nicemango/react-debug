import logo from "./logo.svg";
import "./App.css";

const downloadFile = async (url, fileName) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.style.display = "none";
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    alert(error);

    console.error(error);
  }
};

const fileZip =
  "http://10.15.111.9:12299/storage_area/version_manage/package/a86d9444-19d4-4137-9bc8-08012cd485a1/version_manage/package/a86d9444-19d4-4137-9bc8-08012cd485a1/z-列表查询.zip?filename=file.zip";

const fileZip2 =
  "https://gw.alipayobjects.com/os/bmw-prod/9e8d0874-56d7-41fd-aaf5-f5e6edfec8fe.zip";

const filePdf =
  "https://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/file-manage-files/zh-CN/20230209/zrqc/%E8%9A%82%E8%9A%81%E7%A7%91%E6%8A%80%20%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%20mPaaS%20%E7%AE%80%E4%BB%8B%20%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%2020230208.pdf?spm=a2c4g.87479.0.0.cf862e32wz2o5q&file=%E8%9A%82%E8%9A%81%E7%A7%91%E6%8A%80%20%E7%A7%BB%E5%8A%A8%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0%20mPaaS%20%E7%AE%80%E4%BB%8B%20%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97%2020230208.pdf";

const fileWord =
  "http://ru86gswi1.hn-bkt.clouddn.com/%E8%BE%BE%E8%BF%9C%E6%95%B0%E6%8D%AE%E4%BB%93%E5%BA%93%E8%AE%BE%E8%AE%A1V0.9%E5%A4%8D%E5%88%B6.3%20%281%29.docx?e=1683387455&token=VmyuVum9BfrDmRMWppoXVhKDyRYdfPtBhphf3vRO:onW6GpJegtf984DVeXKxuKUvvlg=";

const Content = () => {
  return (
    <>
      <p>zzh</p>
    </>
  );
};
function App() {
  return (
    <div className="app">
      <header>header</header>
      <Content />
    </div>
  );
}

export default App;
