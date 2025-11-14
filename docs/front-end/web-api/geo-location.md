## 地理位置API

地理位置API允许用户在他们愿意得情况下向Web应用程序提供他们的位置。

#### getCurrentPosition()

获取当前位置信息。

选项：

success（必选）：成功获取地理位置的回调函数，接收一个`GeolocationPosition`对象作为参数。

error（可选）：回调函数，处理获取地理位置失败的场景，接收一个`GeolocationPositionError`对象作为参数。

options（配置选项，如下，配置项均可选）：

>
>
>- [`maximumAge` 可选]
>
>  一个正整数，表示可接受的缓存位置的最大年龄（以毫秒为单位）。如果设置为 `0`，则表示设备不能使用缓存的位置，必须尝试获取实际的当前位置。如果设置为 `Infinity`，则设备必须返回缓存的位置，无论其年龄如何。默认值：`0`。
>
>- [`timeout` 可选]
>
>  一个正整数，表示设备允许花费的最大时间（以毫秒为单位）来返回位置。默认值为 `Infinity`，这意味着 `getCurrentPosition()` 直到位置可用才会返回。
>
>- [`enableHighAccuracy` 可选]
>
>  一个布尔值，指示应用程序希望获得最佳结果。如果为 `true` 且设备能够提供更精确的位置，它将这样做。请注意，这可能导致响应时间变慢或功耗增加（例如，在移动设备上使用 GPS 芯片）。另一方面，如果为 `false`，设备可以自由地通过更快地响应和/或使用更少的电量来节省资源。默认值：`false`。



```javascript
import "./style.css";

const btn = document.querySelector("button");

function callback(GeolocationPosition) {
  console.log(GeolocationPosition);
}

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(callback);
});
```

`GeolocationPosition`对象示例。

```java
{
    "timestamp": 1763105545297,
    "coords": {
        "accuracy": 1728,
        "latitude": 25.2438,
        "longitude": 110.3337,
        "altitude": null,
        "altitudeAccuracy": null,
        "heading": null,
        "speed": null
    }
}
```

`GeolocationPositionError` 对象示例。

```javascript
{
  code: 1,
  message: 'User denied Geolocation',
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3
};
```



#### watchPosition()

监听设备位置变化，注册一个处理函数，在设备位置发生变化时自动调用。

此功能还可能被 [`geolocation`]  `Permissions-Policy` 阻止，并且还需要用户明确授予权限。如果需要，调用此方法时将提示用户。可以使用 [Permissions API](https://mdn.org.cn/en-US/docs/Web/API/Permissions_API) 中的 `geolocation` 用户权限查询权限状态。

参数和`getCurrentPosition()`API一致，参考上面的参数配置。