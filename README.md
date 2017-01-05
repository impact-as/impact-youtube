# impact-youtube

Impact Youtube module
https://github.com/impact-as/impact-youtube


Youtube module to demonstrate module structure for IMPACT A/S frontend modules
- conatins youtube service using Youtube player API
- Youtube service loads Youtube code before first video starts playing
- component with different bindings

Usage:
```html
<impact-youtube
    height="500"
    width="500"
    videoid="123456"
    autoplay="false"
    thumbSrc="/img.jpg"
    onPlay="$ctrl.onPlay"
    onEnd="$ctrl.onEnd"
    onPause="$ctrl.onPause"
    onLoadError="$ctrl.onLoadError"></impact-youtube>


```

### Credits

ImpactByFrontend - 2016
