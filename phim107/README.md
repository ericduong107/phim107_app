# phim107

App coi phim chủ yếu là coi phim hoạt hình để nét và mượt hơn

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## Tổ chức thư mục
Tổ chức thư mục (folder structure) cho dự án Flutter cần đảm bảo tính rõ ràng, dễ bảo trì và mở rộng. Dưới đây là cấu trúc thư mục phổ biến và được khuyến nghị cho dự án Flutter:

### **Cấu trúc thư mục cơ bản**
```
my_flutter_app/
├── android/                  # Thư mục Android native code
├── ios/                     # Thư mục iOS native code
├── lib/                     # Source code chính của ứng dụng (Flutter)
│   ├── src/                 # Chứa các phần chính của ứng dụng
│   │   ├── app/             # Cấu hình ứng dụng, theme, dependencies
│   │   ├── config/          # Các file cấu hình (routes, constants, styles)
│   │   ├── core/            # Logic cốt lõi (utils, helpers, extensions)
│   │   ├── data/            # Xử lý dữ liệu (models, APIs, local storage)
│   │   ├── domain/          # Business logic (repositories, use cases)
│   │   ├── presentation/    # UI & State management (screens, widgets, BLoC/Cubit/Provider)
│   │   └── services/        # Các dịch vụ (auth, notification, analytics)
│   ├── main.dart            # File khởi chạy ứng dụng
│   └── ...                  
├── test/                    # Unit tests, widget tests
├── integration_test/        # Integration tests
├── assets/                  # Tài nguyên (images, fonts, JSON files)
│   ├── images/              
│   ├── fonts/               
│   └── translations/        # File đa ngôn ngữ (JSON/YAML)
├── web/                     # Thư mục web (nếu hỗ trợ)
├── pubspec.yaml             # File cấu hình dependencies
└── README.md                # Hướng dẫn dự án
```

### **Giải thích chi tiết từng phần**

#### **1. Thư mục `lib/` (Quan trọng nhất)**
- **`src/`**: Chứa toàn bộ mã nguồn chính.
  - **`app/`**: Cấu hình ứng dụng (`app_theme.dart`, `app_dependencies.dart`, `app_routes.dart`).
  - **`config/`**: 
    - `constants/`: Biến cố định (màu sắc, kích thước, strings).
    - `routes/`: Định nghĩa routes (tên màn hình, navigation).
    - `styles/`: Text styles, theme extensions.
  - **`core/`**: 
    - `utils/`: Hàm tiện ích (date formatter, validators).
    - `helpers/`: Hỗ trợ (network, localization).
    - `extensions/`: Dart extensions (string, list).
  - **`data/`** (Data Layer):
    - `models/`: Data classes (DTO/entity).
    - `datasources/`: API (remote) và local (SQLite, SharedPreferences).
    - `repositories/`: Kết nối giữa data và domain.
  - **`domain/`** (Business Logic):
    - `entities/`: Đối tượng nghiệp vụ.
    - `repositories/`: Abstract classes định nghĩa contract.
    - `usecases/`: Các use case (ví dụ: `login_usecase.dart`).
  - **`presentation/`** (UI & State Management):
    - `screens/` hoặc `pages/`: Các màn hình.
    - `widgets/`: Component tái sử dụng.
    - `bloc/` hoặc `cubit/` hoặc `providers/`: Quản lý state.
    - `view_models/`: Logic giao diện (nếu dùng MVVM).
  - **`services/`**: 
    - `auth_service.dart`, `api_service.dart`, `firebase_service.dart`.

#### **2. Thư mục `assets/`**
- `images/`: Hình ảnh (tổ chức theo màn hình hoặc chức năng).
- `fonts/`: File font chữ (.ttf).
- `translations/`: File đa ngôn ngữ (dùng với `flutter_localizations`).

#### **3. Thư mục `test/`**
- `unit_test/`: Kiểm thử hàm, class.
- `widget_test/`: Kiểm thử widget.
- `mock/`: Dữ liệu giả (mock API).

#### **4. Thư mục `integration_test/`**
- Kiểm thử tích hợp (ví dụ: flow đăng nhập).

### **Lưu ý quan trọng**
- **Clean Architecture**: Nếu dự án phức tạp, có thể áp dụng **Clean Architecture** (tách rõ `data`, `domain`, `presentation`).
- **Feature-first**: Với dự án lớn, tổ chức theo **tính năng** (mỗi feature có folder riêng chứa đủ `data`, `domain`, `presentation`).
  ```
  lib/
  ├── features/
  │   ├── auth/
  │   │   ├── data/
  │   │   ├── domain/
  │   │   └── presentation/
  │   └── home/
  │       ├── data/
  │       ├── domain/
  │       └── presentation/
  └── core/
  ```
- **Tên file**: Đặt tên rõ ràng (ví dụ: `login_screen.dart`, `user_model.dart`).

### **Ví dụ pubspec.yaml**
```yaml
flutter:
  assets:
    - assets/images/
    - assets/translations/
  fonts:
    - family: Roboto
      fonts:
        - asset: assets/fonts/Roboto-Regular.ttf
```

### **Kết luận**
Tùy vào quy mô dự án, bạn có thể điều chỉnh cấu trúc sao cho phù hợp. Quan trọng nhất là **nhất quán** và **dễ mở rộng**. Nếu dùng BLoC hoặc GetX, có thể thêm thư mục `bloc/` hoặc `controllers/`.